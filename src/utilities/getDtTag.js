export default (address) => {
    console.log('address', address);
    const destTag = address.match(/(?<=\?dt=)\d+$/g);
    console.log('tag', destTag);
    return destTag;
}