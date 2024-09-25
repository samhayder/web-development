//  npx json-server db.json --port 3333
import axios from "axios";
import { ref } from "vue";
import swal from "sweetalert";

export default function useStudent() {
	const url = "http://localhost:3333/students/";

	// create ref student data
	const studentData = ref([]);
	const error = ref(null);
	const statusCode = ref(null);

	const getStudentsList = async () => {
		//reset ref student data
		studentData.value = [];
		error.value = null;

		try {
			const res = await axios(url);
			studentData.value = res.data;
		} catch (err) {
			error.value = err.message;
		}
	};

	// create new student data
	const createStudent = async (formData) => {
		//reset ref student data
		studentData.value = [];
		error.value = null;

		try {
			const config = {
				method: "POST",
				url: url,
				Headers: {
					"Content-Type": "application/json",
				},
				data: JSON.stringify(formData),
			};

			const res = await axios(config);
			studentData.value = res.data;
			statusCode.value = res.status;
		} catch (err) {
			error.value = err.message;
		}
	};

	// show single student data
	const showSingleStudent = async (id) => {
		//reset ref student data
		studentData.value = [];
		error.value = null;

		try {
			const res = await axios(url + id);
			studentData.value = res.data;
		} catch (err) {
			error.value = err.message;
		}
	};

	// Update Single Student Data
	const updateStudent = async (id, formData) => {
		//reset ref student data
		studentData.value = [];
		error.value = null;

		try {
			const config = {
				method: "PUT",
				url: url + id,
				Headers: {
					"Content-Type": "application/json",
				},
				data: JSON.stringify(formData),
			};

			const res = await axios(config);
			studentData.value = res.data;
			statusCode.value = res.status;
		} catch (err) {
			error.value = err.message;
		}
	};

	// Delete Single Student Data
	const deleteStudent = async (id) => {
		//reset ref student data
		studentData.value = [];
		error.value = null;

		try {
			const config = {
				method: "DELETE",
				url: url + id,
				Headers: {
					"Content-Type": "application/json",
				},
			};

			const res = await axios(config);
			statusCode.value = res.status;
		} catch (err) {
			error.value = err.message;
		}
	};

	return {
		studentData,
		error,
		statusCode,
		getStudentsList,
		createStudent,
		showSingleStudent,
		updateStudent,
		deleteStudent,
	};
}
