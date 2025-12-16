import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    getDocs,
    query,
    orderBy
} from "firebase/firestore";
import { db } from "@/utils/firebase";


export async function getTasks(userId) {
    const ref = collection(db, "users", userId, "tasks");
    const q = query(ref, orderBy("title"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}

export async function addTask(userId, title) {
    const ref = collection(db, "users", userId, "tasks");
    await addDoc(ref, {
        title,
        completed: false
    });
}

export async function toggleTask(userId, taskId, completed) {
    const ref = doc(db, "users", userId, "tasks", taskId);
    await updateDoc(ref, { completed });
}

export async function deleteTask(userId, taskId) {
    const ref = doc(db, "users", userId, "tasks", taskId);
    await deleteDoc(ref);
}