require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-grayscale"
  s.version      = package["1.0.1"]
  s.summary      = package["converts base64 image to grayscale base64 image"]
  s.description  = <<-DESC
                  react-native-grayscale
                   DESC
  s.homepage     = "https://github.com/gabrielpoliciuc/react-native-grayscale"
  s.license      = "MIT"
  # s.license    = { :type => "MIT", :file => "FILE_LICENSE" }
  s.authors      = { "Gabriel Policiuc" => "gabriel.policiuc@gmail.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/gabrielpoliciuc/react-native-grayscale.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true

  s.dependency "React"
  # ...
  # s.dependency "..."
end

