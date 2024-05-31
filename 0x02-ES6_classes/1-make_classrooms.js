import ClassRoom from './0-classroom';
export default function initializeRooms() {
	const classe1 = new ClassRoom(19);
	const classe2 =new ClassRoom(20);
	const classe3 = new ClassRoom(34);
	const arr =[classe1,classe2,classe3]
	return arr;
}

