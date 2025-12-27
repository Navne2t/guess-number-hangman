import java.util.Scanner;

public class Guess {

    public static void main(String[] args) {

        int random = (int)(Math.random() * 100); // generate ONCE
        Scanner sc = new Scanner(System.in);

        int count = 1;

        while (count <= 6) {
            System.out.print("Attempt " + count + " - Enter your number: ");
            int num = sc.nextInt();

            if (num == random) {
                System.out.println("🎉 You got it!!");
                break;
            } else if (num > random) {
                System.out.println("Number is smaller");
            } else {
                System.out.println("Number is bigger");
            }

            if (count == 6) {
                System.out.println("❌ Out of attempts! Number was: " + random);
            }

            count++;
        }

        sc.close();
    }
}
