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
    try {
        const ref = collection(db, "users", userId, "tasks");
        const q = query(ref, orderBy("title"));
        const snapshot = await getDocs(q);

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
}

// Add task
export async function addTask(userId, task) {
    try {
        const ref = collection(db, "users", userId, "tasks");
        await addDoc(ref, {
            title: task.title,
            completed: false
        });
    } catch (error) {
        console.error("Error adding task:", error);
        throw error;
    }
}

// Toggle completion
export async function toggleTask(userId, taskId, completed) {
    try {
        const ref = doc(db, "users", userId, "tasks", taskId);
        await updateDoc(ref, { completed })
    } catch (error) {
        console.error("Error toggling task:", error);
        throw error;
    }
}

// Delete task
export async function deleteTask(userId, taskId) {
    try {
        const ref = doc(db, "users", userId, "tasks", taskId);
        await deleteDoc(ref);
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
}

// Update task
export async function updateTaskTitle(userId, taskId, title) {
    try {
        const ref = doc(db, "users", userId, "tasks", taskId);
        await updateDoc(ref, { title })
    } catch (error) {
        console.error("Error updating task title:", error);
        throw error;
    }
}