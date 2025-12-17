//This service will be responsible for fetching tasks from the database
// and will handle any CRUD logic once the database is integrated.
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
import { db } from "@/app/utils/firebase";


// Get all tasks for a user (alphabetical)
export async function getTasks(userId) {
    const ref = collection(db, "users", userId, "tasks");
    const q = query(ref, orderBy("title"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}

// Add task
export async function addTask(userId, task) {
    const ref = collection(db, "users", userId, "tasks");
    await addDoc(ref, {
        title: task.title,
        completed: false
    });
}

// Toggle completion
export async function toggleTask(userId, taskId, completed) {
    const ref = doc(db, "users", userId, "tasks", taskId);
    await updateDoc(ref, { completed })
}

// Delete task
export async function deleteTask(userId, taskId) {
    const ref = doc(db, "users", userId, "tasks", taskId);
    await deleteDoc(ref);
}

// Update task
export async function updateTaskTitle(userId, taskId, title) {
    const ref = doc(db, "users", userId, "tasks", taskId);
    await updateDoc(ref, { title })
}