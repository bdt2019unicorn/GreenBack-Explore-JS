export function AddLocationWidget(Locate, view)
{
    var support_functions = 
    {
        PutLocationWidget(ui_position)
        {
            var locate = new Locate 
            (
                {
                    view: view
                }
            ); 
            // view.ui.add(locate, ui_position);
            return locate; 
        }
    }
    return support_functions.PutLocationWidget("top-left");   
}