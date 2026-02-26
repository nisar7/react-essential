import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import { useState } from "react";
import NewProject from "./components/pages/NewProject";
import NewTask from "./components/pages/NewTask";
import { useRef } from "react";
import ErrorModal from "./components/layouts/ErrorModal";


function App() {

  const [projectList, setProjectList] = useState([])
  const [selectedProjectId, setSelectedProjectId] = useState("")

  const errModalRef = useRef();

  const handleOnAddProject = (projectData) => {
    if (!projectData.title.trim()) {
      errModalRef.current.open("Please Add a title")
      return
    }

    const titleNameExistAlready = projectList?.filter((project) => project?.title?.toLowerCase() === projectData?.title?.toLowerCase())

    if (titleNameExistAlready.length > 0) {
      errModalRef.current.open("Project Already Exist")
      return
    }
    setProjectList((prevVal) => [
      ...prevVal,
      {
        id: Date.now(),
        ...projectData,
        tasks: []

      }
    ]);
  }

  const handleProjectSelection = (selectedProject) => {
    if (selectedProject) {
      setSelectedProjectId(selectedProject)
    }
  }

  const removeProjectSelection = () => {
    setSelectedProjectId("")
  }

  const handleOnAddTask = (newtask) => {
    if (!newtask.trim()) {
      errModalRef.current.open("Please Add Task")
      return
    }
    setProjectList((preVal) => {
      return preVal.map((project) => {
        if (project?.id === selectedProjectId) {
          return {
            ...project,
            tasks: [
              ...project.tasks,
              {
                id: Date.now(),
                text: newtask
              }
            ]
          }
        }
        return project
      })
    })
  }

  const handleTaskDelete = (taskId) => {
    setProjectList((preVal) =>
      preVal.map((project) =>
        project.id === selectedProjectId ?
          {
            ...project,
            tasks: project.tasks.filter((task) => task.id != taskId)
          } :
          project

      )
    )
  }

  const getTaskForSelectedProject = projectList?.find((val) => val?.id === selectedProjectId) || []

  return (
    <div className="flex h-screen bg-gray-100">
      <ErrorModal ref={errModalRef}></ErrorModal>
      <Sidebar
        menuItems={projectList}
        handleProjectSelection={handleProjectSelection}
        selectedProjectId={selectedProjectId}
        removeProjectSelection={removeProjectSelection}
      />
      <div className="flex flex-col flex-1">
        <Header removeProjectSelection={removeProjectSelection}></Header>
        <main className="flex-1 p-6 overflow-auto">
          {selectedProjectId.length === 0 && <div className="bg-white p-6 rounded-xl shadow">
            <NewProject handleOnAddProject={handleOnAddProject}></NewProject>
          </div>}

          {selectedProjectId.length != 0 && <div className="bg-white p-6 rounded-xl shadow">

            <NewTask
              tasks={getTaskForSelectedProject?.tasks || []}
              onAddTask={handleOnAddTask}
              onTaskRemoval={handleTaskDelete}
            >

            </NewTask>
          </div>}
        </main>

      </div>
    </div>
  );
}

export default App;
