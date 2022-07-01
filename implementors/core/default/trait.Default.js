(function() {var implementors = {};
implementors["actix_http"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/body/struct.None.html\" title=\"struct actix_http::body::None\">None</a>","synthetic":false,"types":["actix_http::body::none::None"]},{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.HttpServiceBuilder.html\" title=\"struct actix_http::HttpServiceBuilder\">HttpServiceBuilder</a>&lt;T, S, <a class=\"struct\" href=\"actix_http/h1/struct.ExpectHandler.html\" title=\"struct actix_http::h1::ExpectHandler\">ExpectHandler</a>, <a class=\"struct\" href=\"actix_http/h1/struct.UpgradeHandler.html\" title=\"struct actix_http::h1::UpgradeHandler\">UpgradeHandler</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"struct\" href=\"actix_http/body/struct.BoxBody.html\" title=\"struct actix_http::body::BoxBody\">BoxBody</a>&gt;&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S::Service as Service&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;&gt;::Future: 'static,&nbsp;</span>","synthetic":false,"types":["actix_http::builder::HttpServiceBuilder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.ServiceConfig.html\" title=\"struct actix_http::ServiceConfig\">ServiceConfig</a>","synthetic":false,"types":["actix_http::config::ServiceConfig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.Extensions.html\" title=\"struct actix_http::Extensions\">Extensions</a>","synthetic":false,"types":["actix_http::extensions::Extensions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/h1/struct.ClientCodec.html\" title=\"struct actix_http::h1::ClientCodec\">ClientCodec</a>","synthetic":false,"types":["actix_http::h1::client::ClientCodec"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/h1/struct.Codec.html\" title=\"struct actix_http::h1::Codec\">Codec</a>","synthetic":false,"types":["actix_http::h1::codec::Codec"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/header/map/struct.HeaderMap.html\" title=\"struct actix_http::header::map::HeaderMap\">HeaderMap</a>","synthetic":false,"types":["actix_http::header::map::HeaderMap"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"actix_http/header/enum.ContentEncoding.html\" title=\"enum actix_http::header::ContentEncoding\">ContentEncoding</a>","synthetic":false,"types":["actix_http::header::shared::content_encoding::ContentEncoding"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/header/struct.Quality.html\" title=\"struct actix_http::header::Quality\">Quality</a>","synthetic":false,"types":["actix_http::header::shared::quality::Quality"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"actix_http/enum.KeepAlive.html\" title=\"enum actix_http::KeepAlive\">KeepAlive</a>","synthetic":false,"types":["actix_http::keep_alive::KeepAlive"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.RequestHead.html\" title=\"struct actix_http::RequestHead\">RequestHead</a>","synthetic":false,"types":["actix_http::requests::head::RequestHead"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.ResponseBuilder.html\" title=\"struct actix_http::ResponseBuilder\">ResponseBuilder</a>","synthetic":false,"types":["actix_http::responses::builder::ResponseBuilder"]},{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;B&gt;","synthetic":false,"types":["actix_http::responses::response::Response"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.TlsAcceptorConfig.html\" title=\"struct actix_http::TlsAcceptorConfig\">TlsAcceptorConfig</a>","synthetic":false,"types":["actix_http::service::TlsAcceptorConfig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/test/struct.TestRequest.html\" title=\"struct actix_http::test::TestRequest\">TestRequest</a>","synthetic":false,"types":["actix_http::test::TestRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/ws/struct.Codec.html\" title=\"struct actix_http::ws::Codec\">Codec</a>","synthetic":false,"types":["actix_http::ws::codec::Codec"]}];
implementors["actix_router"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_router/struct.Path.html\" title=\"struct actix_router::Path\">Path</a>&lt;T&gt;","synthetic":false,"types":["actix_router::path::Path"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_router/struct.Url.html\" title=\"struct actix_router::Url\">Url</a>","synthetic":false,"types":["actix_router::url::Url"]}];
implementors["actix_test"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_test/struct.TestServerConfig.html\" title=\"struct actix_test::TestServerConfig\">TestServerConfig</a>","synthetic":false,"types":["actix_test::TestServerConfig"]}];
implementors["actix_web"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/dev/struct.AppConfig.html\" title=\"struct actix_web::dev::AppConfig\">AppConfig</a>","synthetic":false,"types":["actix_web::config::AppConfig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/dev/struct.ConnectionInfo.html\" title=\"struct actix_web::dev::ConnectionInfo\">ConnectionInfo</a>","synthetic":false,"types":["actix_web::info::ConnectionInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.DefaultHeaders.html\" title=\"struct actix_web::middleware::DefaultHeaders\">DefaultHeaders</a>","synthetic":false,"types":["actix_web::middleware::default_headers::DefaultHeaders"]},{"text":"impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.ErrorHandlers.html\" title=\"struct actix_web::middleware::ErrorHandlers\">ErrorHandlers</a>&lt;B&gt;","synthetic":false,"types":["actix_web::middleware::err_handlers::ErrorHandlers"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.Logger.html\" title=\"struct actix_web::middleware::Logger\">Logger</a>","synthetic":false,"types":["actix_web::middleware::logger::Logger"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"actix_web/middleware/enum.TrailingSlash.html\" title=\"enum actix_web::middleware::TrailingSlash\">TrailingSlash</a>","synthetic":false,"types":["actix_web::middleware::normalize::TrailingSlash"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.NormalizePath.html\" title=\"struct actix_web::middleware::NormalizePath\">NormalizePath</a>","synthetic":false,"types":["actix_web::middleware::normalize::NormalizePath"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.Compress.html\" title=\"struct actix_web::middleware::Compress\">Compress</a>","synthetic":false,"types":["actix_web::middleware::compress::Compress"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/test/struct.TestRequest.html\" title=\"struct actix_web::test::TestRequest\">TestRequest</a>","synthetic":false,"types":["actix_web::test::test_request::TestRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/web/struct.FormConfig.html\" title=\"struct actix_web::web::FormConfig\">FormConfig</a>","synthetic":false,"types":["actix_web::types::form::FormConfig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/web/struct.JsonConfig.html\" title=\"struct actix_web::web::JsonConfig\">JsonConfig</a>","synthetic":false,"types":["actix_web::types::json::JsonConfig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/web/struct.PathConfig.html\" title=\"struct actix_web::web::PathConfig\">PathConfig</a>","synthetic":false,"types":["actix_web::types::path::PathConfig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/web/struct.PayloadConfig.html\" title=\"struct actix_web::web::PayloadConfig\">PayloadConfig</a>","synthetic":false,"types":["actix_web::types::payload::PayloadConfig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/web/struct.QueryConfig.html\" title=\"struct actix_web::web::QueryConfig\">QueryConfig</a>","synthetic":false,"types":["actix_web::types::query::QueryConfig"]}];
implementors["awc"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"awc/struct.Client.html\" title=\"struct awc::Client\">Client</a>","synthetic":false,"types":["awc::client::Client"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"awc/middleware/struct.Redirect.html\" title=\"struct awc::middleware::Redirect\">Redirect</a>","synthetic":false,"types":["awc::middleware::redirect::Redirect"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"awc/test/struct.TestResponse.html\" title=\"struct awc::test::TestResponse\">TestResponse</a>","synthetic":false,"types":["awc::test::TestResponse"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()