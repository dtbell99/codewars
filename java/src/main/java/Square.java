class Square {
    public static boolean isSquare(int n) {
        return (Math.sqrt(n) % 1 == 0) ? true : false;
    }

    public static void main(String[] args) {
        System.out.println("-1:"+Square.isSquare(-1));
        System.out.println("4:"+Square.isSquare(4));
        System.out.println("5:"+Square.isSquare(5));
        System.out.println("Tests Pass");
    }
}