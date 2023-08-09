

export const handleToggleBold = (textRef: any) => {
    document.execCommand("bold", false);

    textRef.current.focus();
  };
export const handleToggleItalic = (textRef: any) => {
    document.execCommand("italic", false);

    textRef.current.focus();
  };
export const handleToggleUnderline = (textRef: any) => {
    document.execCommand("underline", false);
    textRef.current.focus();
  };
export const handleToggleHeader = (textRef: any) => {
    document.execCommand("formatBlock", false, 'h2');
    textRef.current.focus();
  };
export const handleAddLink = (textRef:any) => {
    const selectedText = window.getSelection()?.toString();
    document.execCommand("createLink", false, selectedText);
    textRef.current.focus();
  };
export const handleInsertBulletPoints = (textRef:any) => {
    document.execCommand("insertUnorderedList", false,);
    textRef.current.focus();
  };
export const handleTextColorChange = (textRef: any,color: string) => {
    document.execCommand("foreColor", false, color);
    textRef.current.focus();
};