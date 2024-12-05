import { SupervisedUserCircle } from "@mui/icons-material";
import { Divider } from "@mui/material";
import {
    SidebarContext,
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
} from "react-pro-sidebar";
import logo from "./../assets/online-test.png";
import QuizIcon from "@mui/icons-material/Quiz";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Link } from "@inertiajs/react";

const SidebarComponent = ({user}) => {
    return (
        <Sidebar
            className="-mt-0. font-space h-screen "
            backgroundColor="#1f2937"
            style={{ position: "sticky", top: 0 }}
        >
            <Menu
                menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        // only apply styles on first level elements of the tree
                        if (level === 0)
                            return {
                                backgroundColor: "#1f2937",
                                color: "#ffffff",
                                ":hover": {
                                    backgroundColor: "#fb923c",
                                    color: "#ffffff",
                                },
                                backgroundColor: active ? "#ffffff" : undefined,
                            };
                    },
                }}
            >
                <div className="h-40 bg-gray-800 flex items-center flex-col justify-center">
                    <img className="h-16" src={logo} />
                    <p className="text-orange-400 pt-1 font-bold">
                        Online Examination System
                    </p>
                </div>
                <Divider />
                <MenuItem
                    icon={<DashboardIcon />}
                    component={<Link href={route("dashboard")} />}
                    style={{
                        backgroundColor: route().current("dashboard")
                            ? " #fb923c "
                            : "  ",
                        Color: route().current("dashboard")
                            ? " #ffffff "
                            : " #fb923c ",
                    }}
                >
                    Dashboard
                </MenuItem>

                <MenuItem
                    icon={<QuizIcon />}
                    component={<Link href={route("exam.index")} />}
                    style={{
                        backgroundColor: route().current("exam")
                            ? " #fb923c "
                            : "  ",
                        Color: route().current("exam")
                            ? " white "
                            : " white ",
                    }}
                >
                    Exam
                </MenuItem>
                <MenuItem
                    icon={<GroupIcon />}
                    component={<Link href={route("student.index")} />}
                    style={{
                        backgroundColor: route().current("student.index")
                            ? " #1f2937 "
                            : "  ",
                    }}
                >
                    Students
                </MenuItem>
                <MenuItem
                    icon={<GroupIcon />}
                    component={<Link href={route("teacher.index")} />}

                    style={{
                        backgroundColor: route().current("teacher")
                            ? " #1f2937 "
                            : "  ",
                            display: user.role == "teacher" ? "none" : ""
                    }}
                >
                    Teachers
                </MenuItem>
                <MenuItem
                    icon={<AssessmentIcon />}
                    style={{
                        backgroundColor: route().current("teachers")
                            ? " #1f2937 "
                            : "  ",
                    }}
                >
                    Reports
                </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default SidebarComponent;
