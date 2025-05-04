require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "Awake"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "15.1" }
  s.source       = { :git => "https://github.com/12ya/react-native-awake.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,mm,cpp,swift}"
  s.private_header_files = "ios/**/*.h"

  # Swift support
  s.pod_target_xcconfig = {
    "USE_HEADERMAP" => "YES",
    "SWIFT_VERSION" => "5.0"
  }
  
  # Use static library and handle bridging header differently
  s.static_framework = true
  s.module_name = "Awake"

  install_modules_dependencies(s)
end
