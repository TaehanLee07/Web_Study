const LOCAL_STORAGE_KEY = "employeesData"; // LocalStorage에서 사용할 키
let employees = [];

// LocalStorage 데이터 로드 함수
function loadEmployeesFromLocalStorage() {
    const storedEmployees = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedEmployees) {
        employees = JSON.parse(storedEmployees);
    } else {
        // 만약 LocalStorage에 데이터가 없으면 기본으로 있는 사원 데이터로
        employees = [
            { name: "김철수", position: "사원", department: "영업부", email: "chulsoo@example.com" },
            { name: "이영희", position: "대리", department: "인사부", email: "younghee@example.com" },
            { name: "박민수", position: "과장", department: "기획부", email: "minsoo@example.com" },
            { name: "정지혜", position: "차장", department: "재무부", email: "jihye@example.com" },
            { name: "최현우", position: "부장", department: "마케팅부", email: "hyunwoo@example.com" },
            { name: "홍길동", position: "사원", department: "개발부", email: "gildong@example.com" },
            { name: "유진아", position: "대리", department: "디자인부", email: "jina@example.com" },
            { name: "송은수", position: "사원", department: "지원부", email: "eunsu@example.com" },
            { name: "백준수", position: "대리", department: "법무부", email: "joonsu@example.com" },
            { name: "한지민", position: "과장", department: "홍보부", email: "jimin@example.com" }
        ];
    }
}

// LocalStorage에 사원 데이터를 저장하는 함수
function saveEmployeesToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees));
}

// 사원 데이터를 테이블에 로드하는 함수
function loadEmployees() {
    loadEmployeesFromLocalStorage();
    const tableBody = document.getElementById("employeeTable").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = "";

    employees.forEach((employee, index) => {
        let row = tableBody.insertRow();
        row.insertCell(0).innerText = employee.name;
        row.insertCell(1).innerText = employee.position;
        row.insertCell(2).innerText = employee.department;
        row.insertCell(3).innerText = employee.email;
        let actionCell = row.insertCell(4);
        actionCell.innerHTML = `<button onclick="editEmployee(${index})">수정</button> <button onclick="deleteEmployee(${index})">삭제</button>`;
    });
}

function addEmployee() {
    editIndex = null;
    document.getElementById("employeeForm").reset();
    document.getElementById("modalTitle").innerText = "사원 추가";
    openModal();
}

function editEmployee(index) {
    editIndex = index;
    const employee = employees[index];
    document.getElementById("name").value = employee.name;
    document.getElementById("position").value = employee.position;
    document.getElementById("department").value = employee.department;
    document.getElementById("email").value = employee.email;
    document.getElementById("modalTitle").innerText = "사원 수정";
    openModal();
}

function deleteEmployee(index) {
    if (confirm("이 사원을 삭제하시겠습니까?")) {
        employees.splice(index, 1);
        saveEmployeesToLocalStorage(); // 변경 사항을 저장
        loadEmployees();
    }
}

function saveEmployee(event) {
    event.preventDefault();
    const employeeData = {
        name: document.getElementById("name").value,
        position: document.getElementById("position").value,
        department: document.getElementById("department").value,
        email: document.getElementById("email").value
    };

    if (editIndex !== null) {
        employees[editIndex] = employeeData;
    } else {
        employees.push(employeeData);
    }

    saveEmployeesToLocalStorage(); // 변경 사항을 저장
    closeModal();
    loadEmployees();
}

function openModal() {
    document.getElementById("employeeModal").style.display = "block";
}

function closeModal() {
    document.getElementById("employeeModal").style.display = "none";
}

document.getElementById("employeeForm").addEventListener("submit", saveEmployee);

window.onload = loadEmployees;
