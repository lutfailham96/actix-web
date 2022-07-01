(function() {var implementors = {};
implementors["actix_web"] = [{"text":"impl&lt;S, T, Req&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, Req&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.Compat.html\" title=\"struct actix_web::middleware::Compat\">Compat</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;Req&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, Req&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Transform.html#associatedtype.Future\" title=\"type actix_web::dev::Transform::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Transform.html#associatedtype.Response\" title=\"type actix_web::dev::Transform::Response\">Response</a>: MapServiceResponseBody,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Transform.html#associatedtype.Error\" title=\"type actix_web::dev::Transform::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_web/error/struct.Error.html\" title=\"struct actix_web::error::Error\">Error</a>&gt;,&nbsp;</span>","synthetic":false,"types":["actix_web::middleware::compat::Compat"]},{"text":"impl&lt;S, T, Req, BE, BD, Err&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, Req&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.Condition.html\" title=\"struct actix_web::middleware::Condition\">Condition</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;Req, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;BD&gt;, Error = Err&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, Req, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;BE&gt;, Error = Err&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Transform.html#associatedtype.Future\" title=\"type actix_web::dev::Transform::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Transform.html#associatedtype.InitError\" title=\"type actix_web::dev::Transform::InitError\">InitError</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Transform.html#associatedtype.Transform\" title=\"type actix_web::dev::Transform::Transform\">Transform</a>: 'static,&nbsp;</span>","synthetic":false,"types":["actix_web::middleware::condition::Condition"]},{"text":"impl&lt;S, B&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.DefaultHeaders.html\" title=\"struct actix_web::middleware::DefaultHeaders\">DefaultHeaders</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;B&gt;, Error = <a class=\"struct\" href=\"actix_web/error/struct.Error.html\" title=\"struct actix_web::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Service.html#associatedtype.Future\" title=\"type actix_web::dev::Service::Future\">Future</a>: 'static,&nbsp;</span>","synthetic":false,"types":["actix_web::middleware::default_headers::DefaultHeaders"]},{"text":"impl&lt;S, B&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.ErrorHandlers.html\" title=\"struct actix_web::middleware::ErrorHandlers\">ErrorHandlers</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;B&gt;, Error = <a class=\"struct\" href=\"actix_web/error/struct.Error.html\" title=\"struct actix_web::error::Error\">Error</a>&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Service.html#associatedtype.Future\" title=\"type actix_web::dev::Service::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: 'static,&nbsp;</span>","synthetic":false,"types":["actix_web::middleware::err_handlers::ErrorHandlers"]},{"text":"impl&lt;S, B&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.Logger.html\" title=\"struct actix_web::middleware::Logger\">Logger</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;B&gt;, Error = <a class=\"struct\" href=\"actix_web/error/struct.Error.html\" title=\"struct actix_web::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"actix_web/body/trait.MessageBody.html\" title=\"trait actix_web::body::MessageBody\">MessageBody</a>,&nbsp;</span>","synthetic":false,"types":["actix_web::middleware::logger::Logger"]},{"text":"impl&lt;S, B&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.NormalizePath.html\" title=\"struct actix_web::middleware::NormalizePath\">NormalizePath</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;B&gt;, Error = <a class=\"struct\" href=\"actix_web/error/struct.Error.html\" title=\"struct actix_web::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Service.html#associatedtype.Future\" title=\"type actix_web::dev::Service::Future\">Future</a>: 'static,&nbsp;</span>","synthetic":false,"types":["actix_web::middleware::normalize::NormalizePath"]},{"text":"impl&lt;S, B&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.Compress.html\" title=\"struct actix_web::middleware::Compress\">Compress</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"actix_web/body/trait.MessageBody.html\" title=\"trait actix_web::body::MessageBody\">MessageBody</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;B&gt;, Error = <a class=\"struct\" href=\"actix_web/error/struct.Error.html\" title=\"struct actix_web::error::Error\">Error</a>&gt;,&nbsp;</span>","synthetic":false,"types":["actix_web::middleware::compress::Compress"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()