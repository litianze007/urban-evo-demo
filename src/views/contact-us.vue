<template>
    <div class="contact-us">
        <div class="card">
            <h2>Get in Touch</h2>
            <p>If you have any questions or need further information, please don't hesitate to reach out to our company.
                We're here to assist you every step of the way.</p>

            <h2>Contact Details</h2>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:info@cityplanningapp.com">info@cityplanningapp.com</a></li>
                <li><strong>Phone:</strong> +123-456-7898</li>
            </ul>

            <h2>Follow Us</h2>
            <ul>
                <li><strong>Facebook:</strong> @CityPlanningApp</li>
                <li><strong>Twitter:</strong> @CityPlanningApp</li>
            </ul>

            <p class="closing">Your feedback is valuable to us, and we're eager to ensure that you're well-informed about
                the exciting developments taking place in our city.</p>

                <div v-if="!uploadedFiles.length" class="file-upload">
                <label for="fileInput">
                    <div class="dashed-box">
                        <i class="el-icon-upload"></i>
                        <p>Click or drag files to this area to upload</p>
                    </div>
                </label>
                <!-- Allow multiple file uploads -->
                <input type="file" id="fileInput" accept=".pdf, .doc, .docx" @change="handleFileUpload" multiple/>
            </div>



            <div v-for="file in uploadedFiles" :key="file.name" class="uploaded-file">
                {{ file.name }}
                <a :href="file.url" download target="_blank" class="download-btn">Preview</a>
            </div>

            <div class="submit-section">
                <button type="submit" class="submit-btn" @click="submitFiles">Submit</button>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";


@Component
export default class ContactUs extends Vue {

    uploadedFiles: any[] = [];

    handleFileUpload(event: any) {
        const files = Array.from(event.target.files);
        files.forEach((file: any) => {
            const url = URL.createObjectURL(file);
            this.uploadedFiles.push({ name: file.name, url });
            // TODO: Handle actual file upload logic here
        });
    }


    submitFiles(){
        if(!this.uploadedFiles.length){
            this.$message.warning('please add some files')
            return;
        }
        this.uploadedFiles.splice(0)
        this.$message.success('submit successful')
    }
}

</script>

<style lang="less" scoped>
.contact-us {
    position: absolute;
    top: 18vh;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 50px 0;
    font-family: 'Georgia', serif;
    background-color: #2C2C2C;
    color: white;
    overflow-y: auto; // Allow scrolling if content is too tall

    .card {
        background-color: #4e4e4e;
        padding: 3rem;
        border-radius: 0.5rem;
        max-width: 50rem;
        margin: auto;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);

        h2 {
            color: #bf872b;
            font-size: 2em;
            margin-bottom: 1rem;
        }

        h3 {
            color: #bf872b;
            font-size: 1.5em;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.1em;
            line-height: 1.6;
            margin-bottom: 2rem;
        }

        ul {
            list-style-type: none;
            padding-left: 0;

            li {
                font-size: 1.1em;
                margin-bottom: 1rem;
                line-height: 1.6;

                a {
                    color: #b9945ae4;
                    text-decoration: none;
                    transition: all 0.2s;

                    &:hover {
                        text-decoration: underline;
                        color: #bf872b;
                    }
                }
            }
        }

        .closing {
            margin-top: 2rem;
            font-style: italic;
            font-size: 1.2em;
        }


        .file-upload {
            margin-top: 2rem;
            position: relative;

            .dashed-box {
                width: 100%;
                height: 100px;
                border: 2px dashed #b9945ae4;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                cursor: pointer;
            }

            i {
                font-size: 20px;
                color: #b9945ae4;
                margin-bottom: 10px;
            }

            input[type="file"] {
                display: none;
            }
        }

        .uploaded-file {
            padding: 1em 0;
            font-size: 1.1em;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .download-btn {
                padding: 0.5em 1em;
                background-color: #bf872b;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                color: white;
                font-size: 1em;
                transition: all 0.2s;

                &:hover {
                    background-color: #b9945ae4;
                }
            }
        }

        .submit-section {
                margin-top: 2rem;

                .submit-btn {
                    display: block;
                    margin: 0 auto;
                    padding: 0.7em 1.5em;
                    background-color: #bf872b;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    color: white;
                    font-size: 1.2em;
                    transition: all 0.2s;

                    &:hover {
                        background-color: #b9945ae4;
                    }
                }
        }
    }
}
</style>
