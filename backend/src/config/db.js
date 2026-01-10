import mangoose from "mongoose"


export const connectDB=async () => {
	try{
		await mangoose.connect(process.env.MONGO_URI);
		console.log("MONGODB CONNECTED SUCCESFULLY!")
	} catch(error){
		console.log("Error connecting to MONGODB",error);
		process.exit(1);
	}
	
}