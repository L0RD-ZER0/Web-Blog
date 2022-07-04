import bcrypt from "bcryptjs";

async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, await bcrypt.genSalt());
}

async function comparePassword(raw: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(raw, hash);
}
