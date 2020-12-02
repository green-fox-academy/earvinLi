public class Cuboid {
  public static void main(String[] args) {
      // Write a program that stores 3 sides of a cuboid as variables (doubles)
      // The program should write the surface area and volume of the cuboid like:
      //
      // Surface Area: 600
      // Volume: 1000
      double cuboidL = 10;
      double cuboidW = 10;
      double cuboidH = 10;

      double surfaceArea = (cuboidL * cuboidW + cuboidL * cuboidH + cuboidW * cuboidH) * 2;
      double volume = cuboidL * cuboidW * cuboidH;

      System.out.println("Surface Area: " + surfaceArea);
      System.out.println("Volume: " + volume);
  }
}
