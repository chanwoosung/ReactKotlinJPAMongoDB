package demo.controller

import demo.model.*
import demo.service.EventPrinter
import demo.service.RamdaService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import kotlin.reflect.typeOf

@RestController
@RequestMapping("/log")
class Controller {

    @GetMapping("/test")
    fun blog(): String {
        return "Hello Todo"
    }

    @GetMapping("/add")
    fun test(a:Int,b:Int,c:Int)=a+b+c

    @GetMapping("when")
    fun whenSentense(a:Any){
        //중복 조건 해당 되면 먼저 부합되는 조건이 실행됨
        println(a)
        println(a.toString())
        when(a.toString()){
//            1-> println("정수 1")
            "test"-> println("테스트중입니다")
//            is Long -> println("long 변수")
            //!is String -> println("String이 아님")
            else -> println("전부 해당 안되")

        }
    }

    @GetMapping("/forSyn")
    fun forSyntax() {
        for (i in 0..9){
            println(i)
        }
        for (i in 9 downTo 0){
            println(i)
        }
        for (i in 0..9 step 3){
            println(i)
        }
        for (i in 9 downTo 0 step 3) {
            println(i)
        }
        for (i in 0..9) {
            println("work" +i)
            for(j in 0..9){
                print(i*j)
                if(i ==2 && j ==3){
                    break;
                }
            }
        }
        loop@for (i in 0..9) {
            println("GO $i")
            for(j in 0..9){
                print(i*j)
                if(i ==2 && j ==3){
                    break@loop
                }
            }
        }
    }

    @GetMapping("/person")
    fun person(a:String,b:String,c:Int)=Person(a,b,c)

    @GetMapping("/person1")
    fun person1(a:String,b:String,c:Int): String {
        var person= Person(a,b,c)
        println(person.name)
        println(person.gender)
        println(person.age)
        PesonTest(a,b,c)
        PesonTest(a)
        return PesonInfo(a,b,c).introduce()
    }

    @GetMapping("/job")
    fun job(a:String,job:String,company:String,team:Int) {
        println(Job(a,job,company, team).introduce())
        println(Team(a,team).show())
        Job(a,job,company, team).sayHi()
        Team(a,team).introduce()
        Team(a,team).sayHi()

        Agent().job()
        Agent().team()

        Officer().eat()
        Officer().run()

    }

    @GetMapping("/ramda")
    fun ramda(q:Int,w:Int,e:Int,r:String){
//        val c : (String)->Unit = {str -> println("$str")}
        val a :()->Unit={println("no Param")}
        val b :(String)->Unit={println("Param $it")}
        val c :(Int,Int,Int)->Unit={a,b,c-> println(a+b+c)}
        b(r)
        c(q,w,e)
        println(c)
        RamdaService().doIt()
    }

    @GetMapping("/bookSale")
    fun sale(a:String,b:Int,c:Int){
        var price = 5000;
        var saleTime = Book(a,b,c).apply {
            author = "초흥행 작가 " + author
            discount()
        }

        println(saleTime.price)
        var data =saleTime.run {
            println(a + b + c)
            println("초흥행 작가 ${author},${price}")
        }
        var d1 = with(saleTime){
            print(saleTime.price)
            print(saleTime.price)
        }
        saleTime.let { println("초흥행 작가 ${it.author}, ${it.price}, ${d1},${data},${saleTime}") }
        var result = saleTime.let{it.price=3000
            it.author="정지인"
            println("초흥행 작가 ${it.author}, ${it.price}")
            it
        }
        println(result.author)
        println(result.price)


    }

    @GetMapping("/singleTone")
    fun singleTone(){
        println(Counter.count)
        Counter.countUp()
        println(Counter.count)
        Counter.countDown()
        println(Counter.count)
        Counter.countClear()
        println(Counter.count)
    }

    @GetMapping("/count")
    fun count(c:Int,d:Int){
        var a = FoodPoll("짜장")
        var b = FoodPoll("짬뽕")

        for (i in 1..c)a.vote()
        for (i in 1..d)b.vote()

        println(a.count)
        println(a.name)
        println(b.count)
        println(b.name)
        println(FoodPoll.total)
    }

    @GetMapping("/countBtn")
    fun countBtn(){
        EventPrinter().start()
    }

    @GetMapping("/cola")
    fun cola(){
//        Cola().drink()
//        var a = Drink()
        var a:Drink = Cola() //Cola의 인스턴스를 Drink타입의 변수에 할당 이렇게는 washDishes 호출 불가 (as, is로 다운 캐스팅 필요)
        if ( a is Cola){
            a.washDishes()
        }

        var b = a as Cola // b, a =>Cola 로 작동
        b.washDishes() // 호출 가능능
        //as 는~가 같다(바로 변환)
        //is 는 ~체크후 변환 if 문등에서 사용

        println(a.name)
        println(a.drink())
    }

    @GetMapping("/generic")
    fun generic(){
        UsingGeneric(Generic()).doShouting()
        UsingGeneric(Child()).doShouting()
        UsingGeneric(ChildTwo()).doShouting()
        doShouting(Generic())
    }
    @GetMapping("/list")
    fun getList(){
        val a = listOf("사과","딸기","배")
        print(a[1])
        for(fruit in a) {
            println(fruit)
        }
        var b = mutableListOf(6,3,1)
        println(b)
        b.add(4)
        println(b)
        b.add(3,5)
        println(b)
        b.set(3,7)
        println(b)
        b.shuffle()
        println(b)
        b.sort()
        println(b)
        b.removeAt(1)
        println(b)
        b.remove(1)
        println(b)

    }
    @GetMapping("/isnull")
    fun nullCheck(){
        // ?. => 객체가 널인지 확인한 후에 실행
        // ?: => 객체가 널이면 default 값으로 대체한다.
        // !!.=> 객체가 널이면 nullpointException 이 나도록 방치하는연산자
        var a:String? = null
        println(a?.toUpperCase())
        println(a?:"test".toUpperCase())
        a = "go?!"
        a?.run {
            println(toUpperCase())
            println(toLowerCase())
        }
    }
    @GetMapping("/isequal")
    fun isEqualCheck(){
        var a = Product("콜라",1000)
        var b = Product("사이다",900)
        var c = Product("물", 500)
        var d = Product("콜라",1000)
        var e = a

        // == 는 내용이같은지
        // === 는 객체가 같은지 판별
        println(a==b)
        println(a===b)

        println(a==d)
        println(a===d)

        println(a==e)
        println(a===e)
    }
    @GetMapping("/isfix")
    fun isfix(){
        infix fun Int.multiply(x:Int):Int = this*x
        println(6 multiply 4)// 6=> infix함수가 적용되는 객체자신 = this, 4는 매개변수
        println(6.multiply(4))// 6=> infix함수가 적용되는 객체자신 = this, 4는 매개변수 위와 값은 동일
    }
    @GetMapping("/outer")
    fun outer(){
        Outer.Nested().introduce()
        println("")
        var outer = Outer()
        var inner = outer.Inner();
        inner.innerIntro()
        println("")
        inner.outerIntro()
        outer.text = "changed Outer Class"
        inner.innerIntro()
        inner.outerIntro()
    }
    @GetMapping("/isenum")
    fun isenum(){
        var state = State.SING  //enum은 선언시에 만든객체를 이름으로 참조하여 그대로 사용하게된다.
        println(state)
        println(state.name)
        state = State.SLEEP

        println(state.isSleeping())

        state = State.EAT
        println("?")
        println(state.isSleeping())
        println(state.message)
    }
//    @GetMapping("/study")
//    fun study(): ResponseEntity<UserInfo> {
//        val status = HttpStatus.NOT_FOUND;
//        if(customer)
//        return "";
//    }


}
object Counter{
    var count = 0
    fun countUp(){
        count ++
    }
    fun countDown(){
        count--
    }
    fun countClear(){
        count = 0
    }
}

