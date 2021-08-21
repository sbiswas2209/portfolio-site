import database from "../common/database";
export default async function getRoles() {
    const roles = [];
    const rolesCursor = await (await database()).collection('roles').find({});
    await rolesCursor.forEach((role) => {
        delete role['_id'];
        roles.push(role);
    });
    return roles;
}
