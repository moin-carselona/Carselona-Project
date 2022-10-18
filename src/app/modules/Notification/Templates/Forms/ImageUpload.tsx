import Resizer from "react-image-file-resizer";
const resizeFile = (file: any) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            300,
            400,
            "JPEG",
            80,
            0,
            (uri: any) => {
                resolve(uri);
            },
            "base64"
        );
    });
function ImageUpload({setUpload}:any) {
    const onChange = async (event: any) => {
        const file = event.target.files[0];
        const image = await resizeFile(file);
        // console.log(image);
        setUpload(image)
    };
    return (
        <>
            <input
                placeholder='Link Here...'
                name='imagearray'
                type='file'
                className='form-control form-control-solid mb-3 mb-lg-0'
                autoComplete='off'
                onChange={onChange}
                style={{ width: "250px" }}
            />
        </>
    );
}
export default ImageUpload