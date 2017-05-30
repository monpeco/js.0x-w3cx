require 'test_helper'

class StaticControllerTest < ActionController::TestCase
  test "should get city" do
    get :city
    assert_response :success
  end

  test "should get home_page" do
    get :home_page
    assert_response :success
  end

end
