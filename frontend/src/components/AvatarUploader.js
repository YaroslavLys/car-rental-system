import {useState} from "react";
import useAxios from "../utils/useAxios";
import {baseUserProfileURL} from "../utils/baseURLs";


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
            })
            .catch((error) => {
                console.error('Error uploading avatar', error);
            });
    };

    return (
        <div>
            <input type="file" onChange={handleFileSelect}/>
            <button onClick={handleUpload}>Upload Avatar</button>
        </div>
    );
};

export default AvatarUploader;