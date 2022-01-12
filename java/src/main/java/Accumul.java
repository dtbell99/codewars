public class Accumul {

    public static String accum(String s) {
        int cntr=0;
        StringBuilder sb = new StringBuilder();
        for (String str : s.toLowerCase().split("")) {
            if (sb.length() > 0) {
                sb.append("-");
            }
            sb.append(str.toUpperCase());
            for (int i = 0; i < cntr; i++) {
                sb.append(str);
            }
            cntr++;
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        assert accum("abcd").equals("A-Bb-Ccc-Dddd");
        assert accum("cwaT").equals("C-Ww-Aaa-Tttt");
        System.out.println("Test(s) Pass");
    }
}