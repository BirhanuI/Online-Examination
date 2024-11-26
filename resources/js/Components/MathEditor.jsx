// MathEditor.jsx
import React, { useMemo, useState, useCallback } from "react";
import {
    createEditor,
    Transforms,
    Editor,
    Element as SlateElement,
} from "slate";
import { Slate, Editable, withReact, useSlate, ReactEditor } from "slate-react";
import { MathJax } from "better-react-mathjax";
import {
    FormatBold,
    FormatItalic,
    FormatQuote,
    FormatUnderlined,
    Functions,
} from "@mui/icons-material";
// import isHotkey from 'is-hotkey';

// const HOTKEYS = {
//     'mod+b': 'bold',
//     'mod+i': 'italic',
//     'mod+u': 'underline',
// };

const MathEditor = ({ onChange }) => {
    const [editor] = useState(() => withReact(createEditor()));
    const [value, setValue] = useState([
        {
            type: "paragraph",
            children: [{ text: "" }],
        },
    ]);
    const handleChange = useCallback(
        (newValue) => {
            setValue(newValue);

            // Convert the editor content to HTML string
            const htmlString = newValue
                .map((node) => {
                    if (node.type === "paragraph") {
                        const textContent = node.children
                            .map((child) => {
                                let text = child.text;
                                // Apply formatting
                                if (child.bold)
                                    text = `<strong>${text}</strong>`;
                                if (child.italic) text = `<em>${text}</em>`;
                                if (child.underline) text = `<u>${text}</u>`;
                                return text;
                            })
                            .join("");
                        return `<p>${textContent}</p>`;
                    } else if (node.type === "math") {
                        const mathText =
                            node.children && node.children[0]
                                ? node.children[0].text
                                : "";
                        return `<MathJax class="math-element" data-latex="${node.latex}">\\(${node.latex}\\)</MathJax>${mathText}`;
                    } else if (node.type === "block-quote") {
                        return `<blockquote>${node.children
                            .map((child) => child.text)
                            .join("")}</blockquote>`;
                    }
                    return "";
                })
                .join("");

            // console.log('HTML Content:', htmlString);

            if (onChange) {
                onChange(htmlString);
            }
        },
        [onChange]
    );
    const renderElement = useCallback((props) => {
        // console.log(props);
        switch (props.element.type) {
            case "math":
                return <MathElement {...props} />;
            case "block-quote":
                return (
                    <blockquote {...props.attributes}>
                        {props.children}
                    </blockquote>
                );
            default:
                return <DefaultElement {...props} />;
        }
    }, []);

    const renderLeaf = useCallback((props) => {
        return <Leaf {...props} />;
    }, []);

    // const onKeyDown = event => {
    //     for (const hotkey in HOTKEYS) {
    //         if (isHotkey(hotkey, event)) {
    //             event.preventDefault();
    //             const mark = HOTKEYS[hotkey];
    //             toggleMark(editor, mark);
    //         }
    //     }
    // };

    return (
        <div className="border p-5">
            <Slate
                editor={editor}
                value={value}
                initialValue={value}
                onChange={handleChange}
                // onChange={(newValue) => setValue(newValue)}
            >
                <Toolbar>
                    <MarkButton format="bold" icon=<FormatBold /> />
                    <MarkButton format="italic" icon=<FormatItalic /> />
                    <MarkButton format="underline" icon=<FormatUnderlined /> />
                    <BlockButton format="block-quote" icon=<FormatQuote /> />
                    <MathButton />
                </Toolbar>
                <Editable
                    className="mt-5 p-5 border"
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    placeholder="Write your question here..."
                    // onKeyDown={onKeyDown}
                />
            </Slate>
        </div>
    );
};

// Toolbar components
const Toolbar = ({ children }) => {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "8px",
                marginBottom: "8px",
                display: "flex",
                gap: "8px",
                // backgroundColor: ''
            }}
        >
            {children}
        </div>
    );
};

const MarkButton = ({ format, icon }) => {
    const editor = useSlate();
    return (
        <span
            onMouseDown={(event) => {
                event.preventDefault();
                toggleMark(editor, format);
            }}
            style={{
                backgroundColor: isMarkActive(editor, format)
                    ? "#ddd"
                    : "transparent",
            }}
        >
            <span className="material-icons">{icon}</span>
        </span>
    );
};

const BlockButton = ({ format, icon }) => {
    const editor = useSlate();
    return (
        <span
            onMouseDown={(event) => {
                event.preventDefault();
                toggleBlock(editor, format);
            }}
            style={{
                backgroundColor: isBlockActive(editor, format)
                    ? "#ddd"
                    : "transparent",
            }}
        >
            <span className="material-icons">{icon}</span>
        </span>
    );
};

const MathButton = () => {
    const editor = useSlate();
    return (
        <span
            onMouseDown={(event) => {
                event.preventDefault();
                insertMath(editor);
            }}
        >
            <Functions />
        </span>
    );
};

// Helper functions
const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);
    if (isActive) {
        Editor.removeMark(editor, format);
    } else {
        Editor.addMark(editor, format, true);
    }
};

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
};

const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format);
    Transforms.setNodes(
        editor,
        { type: isActive ? "paragraph" : format },
        { match: (n) => Editor.isBlock(editor, n) }
    );
};

const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
        match: (n) => n.type === format,
    });
    return !!match;
};
// Math element component with live preview
const MathElement = ({ attributes, children, element }) => {
    const editor = useSlate();
    const [isEditing, setIsEditing] = useState(false);
    const [latex, setLatex] = useState(element.latex || "edit latex");

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };
    const handleLatexChange = (e) => {
        const newLatex = e.target.value;
        setLatex(newLatex);

        // Update the element in Slate with the new LaTeX value
        const path = ReactEditor.findPath(editor, element);
        Transforms.setNodes(editor, { latex: newLatex }, { at: path });
    };
    return (
        <div {...attributes} className="inline-block">
            {isEditing ? (
                <input
                    value={latex}
                    onChange={handleLatexChange}
                    onBlur={handleBlur}
                    type="text"
                    // autoFocus
                    placeholder="Enter LaTeX expression"
                    className="text-black inline "
                />
            ) : (
                <div
                    contentEditable={false}
                    onDoubleClick={handleDoubleClick}
                    className="text-black inline-flex"
                >
                    <MathJax
                        className="inline-block px-2 hover:bg-gray-700 "
                        title="double click to edit"
                        aria-placeholder="double click to edit"
                    >
                        {`\\(${latex}\\)`}
                    </MathJax>
                </div>
            )}
            {children}
        </div>
    );
};
const insertMath = (editor) => {
    const math = {
        type: "math",
        latex: "",
        children: [{ text: "" }],
    };
    Transforms.insertNodes(editor, math);
};

const DefaultElement = (props) => {
    return <p {...props.attributes}>{props.children}</p>;
};
// Leaf component for text formatting
const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }
    if (leaf.italic) {
        children = <em>{children}</em>;
    }
    if (leaf.underline) {
        children = <u>{children}</u>;
    }
    return <span {...attributes}>{children}</span>;
};

export default MathEditor;
