export function AddLocationWidget(Locate, view)
{
    var locate = new Locate 
    (
        {
            view: view,
            goToLocationEnabled: false
        }
    ); 
    view.ui.add(locate, "top-left");
    return locate; 
}