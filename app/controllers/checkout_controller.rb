# -*- encoding : utf-8 -*-
class CheckoutController < ApplicationController

  include ActiveMerchant::Billing
  include CheckoutHelper

  layout "application"

  before_filter :assigns_gateway

  def finish
    address = nil
    @transaction = Transaction.create_transaction(current_user, session[:carrinho])
    @order = Order.create_order(@transaction)
    session[:items] = @transaction.items
    session[:order_id] = @order.id
    total_as_cents, setup_purchase_params = get_setup_purchase_params @order, request, @transaction.items
    setup_response = @gateway.setup_purchase(total_as_cents, setup_purchase_params)
    session[:carrinho] = nil
    redirect_to @gateway.redirect_url_for(setup_response.token)
  end

  def review
    if params[:token].nil? or params[:PayerID].nil?
      redirect_to cart_url, :notice => "Nos desculpe, ocorreu uma falha ao completar o pagamento pelo PayPal, por favor realize novamente a sua compra."
      return
    end
    total_as_cents, purchase_params = get_purchase_params Order.find(session[:order_id]), request, session[:items], params
    @purchase = @gateway.purchase total_as_cents, purchase_params
    # @transaction = Transaction.update_transaction(request, @purchase, @experience_date, current_user)

    # if @purchase.success?
  end

  def assigns_gateway
    hash = {
      :login => APP_CONFIG["paypal_login"],
      :password => APP_CONFIG["paypal_password"],
      :signature => APP_CONFIG["paypal_api_signature"]
    }
    @gateway ||= PaypalExpressGateway.new(
      :login => hash[:login],
      :password => hash[:password],
      :signature => hash[:signature]
    )
  end


end