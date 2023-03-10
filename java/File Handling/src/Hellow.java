public class Hellow {

  public static void main(String[] args) {
      Person person = new Person();
      Child child = new Child();
      Senior senior = new Senior();
      
      person.cry();
      child.cry();
      senior.cry();
  }
}

class Person {
  void cry() {
      System.out.println("흑흑");
  }
}

class Child extends Person {
  @Override
  protected  void cry() {
      System.out.println("잉잉");
  }
}

class Senior extends Person {
  @Override
  protected void cry() {
      System.out.println("훌쩍훌쩍");
  }
//    OverloadingMethods om = new OverloadingMethods();
//
//    om.print();
//    System.out.println(om.print(3));
//    om.print("Hello!");
//    System.out.println(om.print(4, 5));
//  }
//}
//
//class OverloadingMethods {
//  public void print() {
//    System.out.println("오버로딩1");
//  }
//
//  String print(Integer a) {
//    System.out.println("오버로딩2");
//    return a.toString();
//  }
//
//  void print(String a) {
//    System.out.println("오버로딩3");
//    System.out.println(a);
//  }
//
//  String print(Integer a, Integer b) {
//    System.out.println("오버로딩4");
//    return a.toString() + b.toString();
//  }

}
