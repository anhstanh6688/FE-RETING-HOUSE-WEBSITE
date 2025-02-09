import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

function Dropzone() {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    // Do something with the files
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        acceptedFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
    console.log(">>> Images are lager than 5MB: ", rejected);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxSize: 1024 * 3000, // Ảnh có size tối đa là 5MB
  });

  const removeImg = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles); // Cập nhật state của files
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    if (!files?.length) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("file", file));

    formData.append("upload_preset", "upload-pb7f31j3");

    const URL = process.env.REACT_APP_CLOUDINARY_URL;
    const data = await fetch(URL, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    console.log(data);
  };

  return (
    <>
      <div
        {...getRootProps()}
        className=" border-secondary d-flex justify-content-center align-items-center mx-auto mb-3"
        style={{
          width: "100%",
          maxWidth: "500px", // Giới hạn chiều rộng tối đa
          height: "200px", // Chiều cao cố định
          backgroundColor: "initial",
          cursor: "pointer",
          borderRadius: "20px",
          borderStyle: "dashed",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Thả các ảnh vào đây</p>
        ) : (
          <p>Thả các ảnh vào đây, hoặc bấm vào đây để thêm ảnh.</p>
        )}
      </div>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "1rem",
          marginBottom: "1rem",
        }}
      >
        Danh sách ảnh:{" "}
      </p>
      <ul className="d-flex flex-wrap" style={{ listStyleType: "none" }}>
        {files.map((file, index) =>
          file.preview ? (
            <li
              key={index}
              style={{ position: "relative", display: "inline-block" }}
            >
              <img
                src={file.preview}
                alt=""
                className="mx-1 border rounded img-fluid"
                style={{
                  width: "100px",
                  height: "100px",
                }}
                onLoad={() => URL.revokeObjectURL(file.preview)}
              />
              <Button
                className="btn btn-warning"
                onClick={() => removeImg(index)}
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  height: "35px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faX} size="sm" />
              </Button>
            </li>
          ) : null
        )}
      </ul>

      {rejected.length > 0 ? (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Có 1 số ảnh không được thêm do lớn hơn 3MB!!!
        </p>
      ) : (
        <> </>
      )}

      <div className="d-flex flex-row-reverse">
        <Button variant="outline-dark" onClick={(e) => handleSumbit(e)}>
          Lưu hình ảnh
        </Button>
      </div>
    </>
  );
}

export default Dropzone;
