export default (text: string): string => {
    if(!text) return '';
    const splitText = text.split(' ');
    const firstInitial = splitText[0].charAt(0).toUpperCase();
    let secondInitial = '';
    if(splitText.length > 1) secondInitial = splitText[splitText.length -1].charAt(0).toUpperCase();
    
    return `${firstInitial}${secondInitial}`;
}
  
