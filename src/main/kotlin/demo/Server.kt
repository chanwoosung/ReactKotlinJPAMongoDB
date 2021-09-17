package demo//import io.ktor.application.call
//import io.ktor.html.respondHtml
//import io.ktor.http.HttpStatusCode
//import io.ktor.response.*
//import io.ktor.routing.get
//import io.ktor.routing.routing
//import io.ktor.server.engine.embeddedServer
//import io.ktor.server.netty.Netty
//import kotlinx.html.*

//fun HTML.index() {
//    head {
//        title("Hello from Ktor!")
//    }
//    body {
//        div {
//            +"Hello from Ktor"
//        }
//    }
//}

//fun demo.main() {
//    embeddedServer(Netty, port = 8080, host = "127.0.0.1") {
//        routing {
//            get("/") {
//                call.respondHtml(HttpStatusCode.OK, HTML::index)
//            }
//            routing {
//                get ( "/api" ){
//                    call.respondText ("hello?")
////                    val map = HashMap<String, Any>()
////                    map["id"] = "snowdeer"
////                    map["age"] = 40
////                    map["email"] = "snowdeer0314@gmail.com"
////                    map["boolean"] = true
////                    map["float"] = 3.14F
////                    map["long"] = 30L
////
////                    call.respond(mapOf("data" to map))
//                }
//            }
//        }
//    }.start(wait = true)
//}