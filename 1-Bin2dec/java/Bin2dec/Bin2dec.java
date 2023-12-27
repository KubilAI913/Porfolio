import java.util.Scanner;

public class Bin2dec{

    public static int binToDec(String binStr) {       
    
    int decValue = 0;
    int binLength = binStr.length();

    for(int i = 0; i < binLength; i++) {

// ikinin üssünü kullanarak ondalık değerini buluyoruz

        decValue += Character.getNumericValue(binStr.charAt(i)) * Math.pow(2, (binLength - 1 - i));
        }  
    return decValue;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
//kullanıcıdan sadece 0 veya 1 girmesini istiyoruz(binary 2 tabanında)
            System.out.println("Enter binary number(max 8): ");
            String binInput = scanner.next();

//gelen verinin binary olup olmadığına bakıyoruz, değilse hata fırlatıyoruz
            if (!binInput.matches("[01]+") || binInput.length() > 8) {
                throw new IllegalArgumentException("Invalid binary input.");
            }

//binary sayıyı decimal sayıya dönüştürüyoruz
            int decValue = binToDec(binInput);
            System.out.println(binInput + " in decimal is " + decValue);
                
            }catch (IllegalArgumentException e) {
                System.out.println("error: " +e.getMessage());
            }finally {
                scanner.close();
        }

    }
}
