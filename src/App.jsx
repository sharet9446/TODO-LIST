import "./App.css";
import TodoForm from "./components/TodoForm";

// - [ ]  투두 제목과 투두 내용을 입력받아 [추가] 버튼 클릭 시 Working 제목 밑으로 투두 추가 처리
// - [ ]  제목과 내용을 모두 입력하지 않았을 시 alert 로 유효성검사 실시
// - [ ]  투두의 [삭제] 버튼 클릭 시 삭제 처리
// - [ ]  [완료] 버튼 클릭 시 Working 에서 Done 안으로 투두 이동
// - [ ]  [취소] 버튼 클릭 시 Done 에서 Working 안으로 투두 이동
// - [ ]  components 폴더안에 있는 컴포넌트들 (TodoForm, TodoList, TodoItem)을 사용합니다.
// - [ ]  github에 업로드하여 링크를 제출합니다.

function App() {
  return (
    <>
      <TodoForm />
    </>
  );
}

export default App;
