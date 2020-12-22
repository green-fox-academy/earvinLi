public class Check {
    public static void main(String[] args) {
        String s = "";
        while (temp1 != 0 || temp2 != 0) {
            int temp3 = temp1 % 10;
            int temp4 = temp2 % 10;
            temp1 = temp1 / 10;
            temp2 = temp2 / 10;
            carryOld = carry;
            carry = (temp3 + temp4 + carryOld > 9) ? (temp3 + temp4 + carryOld) / 10 : 0;
            if (carry != 0 && carryOld != 0) {
                String s = String.format("%d + %d + (%d) = %d carry %d"
                        , temp3, temp4, carryOld, (temp3 + temp4 + carryOld) % 10, carry);
                System.out.println(s);
            } else if (carry != 0) {
                String s = String.format("%d + %d = %d carry %d"
                        , temp3, temp4, (temp3 + temp4 + carryOld) % 10, carry);
                System.out.println(s);
            } else if (carryOld != 0) {
                String s = String.format("%d + %d + (%d) = %d"
                        , temp3, temp4, carryOld, (temp3 + temp4 + carryOld) % 10);
                System.out.println(s);
            } else {
                String s = String.format("%d + %d = %d"
                        , temp3, temp4, (temp3 + temp4 + carryOld) % 10);
                System.out.println(s);
            }
        }
    }
}
