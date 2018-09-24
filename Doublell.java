class Doublell{   
	Node head;
	public static class Node {  
		int data;
		Node prev;
		Node next; 
		Node(int d){  
			data=d;
		}
	} 

	public static void main(String[] args) {
		Doublell ll = new Doublell();
		ll.head = new Node(1);
		Node second = new Node(2);
		Node third = new Node(3);
		Node fourth = new Node(4);
		ll.head.next=second;
		ll.head.prev= null;
		second.next=third;
		second.prev=ll.head;
		third.next=fourth;
		third.prev=second;
		fourth.next=null;
		fourth.prev=third; 
	}
}