import { Editor } from "@tinymce/tinymce-react";

const TextEditor = ({ title, name, value, handleValue }) => {
  const editorInit = {
    min_height: 400,
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table paste wordcount",
      "codesample code",
      "autoresize",
    ],
    codesample_languages: [
      { text: "HTML/XML", value: "markup" },
      { text: "JavaScript", value: "javascript" },
      { text: "CSS", value: "css" },
      { text: "PHP", value: "php" },
    ],
    toolbar:
      "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | codesample code",
  };
  return (
    <div className="editor-wrapper">
      <span className="textEditorName">{title.uz}</span>
      <Editor
        onEditorChange={(e) => {
          handleValue.uz && handleValue.uz(e);
          localStorage.setItem(name.uz, JSON.stringify(e));
        }}
        value={value.uz}
        init={editorInit}
      />
      <br />
      <br />
      <span className="textEditorName">{title.ru}</span>
      <Editor
        onEditorChange={(e) => {
          handleValue.ru && handleValue.ru(e);
          localStorage.setItem(name.ru, JSON.stringify(e));
        }}
        value={value.ru}
        init={editorInit}
      />
      <br />
      <br />
      <span className="textEditorName">{title.en}</span>
      <Editor
        onEditorChange={(e) => {
          handleValue.ru && handleValue.en(e);
          localStorage.setItem(name.en, JSON.stringify(e));
        }}
        value={value.en}
        init={editorInit}
      />
    </div>
  );
};

export default TextEditor;
