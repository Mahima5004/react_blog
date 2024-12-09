import conf from "../conf/conf";
import { Client, Databases, Storage, Query , ID} from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId, slug)
        }catch(error){
            console.log("Appwrite service :: getPost() :: ",error);
            return false;
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try{
          return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
        }catch(error){
            console.log("Appwrite service :: getPosts() :: ",error);
            return false;
        }
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId,
                 slug,{
                    title, content, featuredImage, status, userId
                 })
          }catch(error){
              console.log("Appwrite service :: createPost() :: ",error);
              return false;
          }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, 
                slug, {
                    title, content, featuredImage, status
                })
          }catch(error){
              console.log("Appwrite service :: updatePost() :: ",error);
              return false;
          }
    }

    async deletePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, 
                slug)
                return false
          }catch(error){
              console.log("Appwrite service :: deletePost() :: ",error);
              return false;
          }
          // const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<YOUR_PROJECT_ID>'); // Your project ID

// const databases = new Databases(client);

    }

    //storage service
    async uploadFiles(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBuckettId,
                ID.unique(),
                file
            )
        }catch(error){
            console.log("Appwrite service :: u() :: ",error);
            return false;
    }
}
async deleteFile(file){
    try{
        return await this.bucket.createFile(
            conf.appwriteBuckettId,
            ID.unique(),
            file
        )
    }catch(error){
        console.log("Appwrite service :: deleteFile() :: ",error);
        return false;
    }
}
getFilePreview(fieldId){
  return this.bucket.getFilePreview(
    conf.appwriteBuckettId,
    fieldId
  ).href
}

}

const service = new Service()
export default service

