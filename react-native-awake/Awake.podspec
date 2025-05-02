require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "Awake"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => 15.1 }
  s.source       = { :git => "https://github.com/12ya/react-native-awake.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,mm,cpp,swift}"
  s.private_header_files = "ios/**/*.h"

  s.dependency    "React-Core"
  s.dependency 'React-RCTTurboModule'

  s.swift_version = "5.9"
  s.requires_arc     = true
  s.static_framework = true

 install_modules_dependencies(s)
end
