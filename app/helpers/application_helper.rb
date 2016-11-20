require 'webpack'

module ApplicationHelper
  def webpack_bundle_tag(bundle, options = {})
    Webpack.check! if Rails.env.development?
    javascript_include_tag("/assets/#{bundle}.bundle.js", options)
  end
end
