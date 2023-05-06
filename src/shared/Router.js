// import { formToJSON } from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Join, Login, NewPost, StudyGroupBoard, DetailPost } from "pages/index";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudyGroupBoard />}></Route>
                <Route path="/NewPost" element={<NewPost />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Join" element={<Join />}></Route>
                <Route path="/DetailPost" element={<DetailPost />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
