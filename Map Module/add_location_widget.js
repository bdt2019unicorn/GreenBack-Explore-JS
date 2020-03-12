export function AddLocationWidget(Locate, view)
{
    var locate = new Locate 
    (
        {
            view: view
        }
    ); 
    view.ui.add(locate, "top-left");
    return locate; 
}