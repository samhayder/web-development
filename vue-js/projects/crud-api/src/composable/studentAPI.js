import axios from "axios";
import { ref } from "vue";

export default function useStudent() {
  const url = "http://localhost:3333/students/";

	// create ref student data
	const studentData = ref([]);
	const error = ref(null);

	const getStudentsList = async () => {

		//reset ref student data
		studentData.value = [];
		error.value = null;

		try {
			const res = await axios(url);
			studentData.value = res.data;
		} catch (err) {
			error.value = err;
		}
	};

  

	return {
		studentData,
		error,
		getStudentsList,
	};
}
