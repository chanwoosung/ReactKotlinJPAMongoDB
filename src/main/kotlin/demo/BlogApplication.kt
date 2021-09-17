package demo

//import mu.KotlinLogging

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

//private val logger = KotlinLogging.logger{}

fun main(args: Array<String>) {
    runApplication<BlogApplication>(*args)
//    println("hello?")
//    logger.trace { "I'm trace! hello, world." }
//    logger.debug { "I'm debug! Hello world." }
//    logger.info { "I'm info! Hello world." }
//    logger.warn { "I'm warn! Hello world." }
//    logger.error { "I'm error! Hello world." }


}
@SpringBootApplication
class BlogApplication
//
//    @Value("\${my-app.welcome-message}")
//    val myAppWelcomMessage: String = ""
//
//    @PostConstruct
//    fun printMyAppWelcomMessage(){
//        println(myAppWelcomMessage)
//    }
//
//@RestController
//@RequestMapping("/test")
//class MessageResource {
//    @GetMapping("/test")
//    fun index(): List<Message> = listOf(
//        Message("1", "Hello!"),
//        Message("2", "Bonjour!"),
//        Message("3", "Privet!"),
//    )
//}
//data class Message(val id: String?, val text: String)
