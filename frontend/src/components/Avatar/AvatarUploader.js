import {useState} from "react";
import useAxios from "../../utils/useAxios";
import {baseUserProfileURL} from "../../utils/baseURLs";
import {Upload} from "./AvatarUploader.styles";


const AvatarUploader = () => {
    const api = useAxios();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('avatar', selectedFile);
        api.put(`${baseUserProfileURL}/avatar/`, formData)
            .then((response) => {
                console.log('Avatar uploaded successfully');
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error uploading avatar', error);
            });
    };

    return (
        <Upload>
            <input type="file" accept="image/png, image/jpeg" onChange={handleFileSelect}/>
            <button onClick={handleUpload}>Upload Avatar</button>
        </Upload>
    );
};

export default AvatarUploader;