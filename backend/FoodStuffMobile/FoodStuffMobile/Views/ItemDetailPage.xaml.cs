using FoodStuffMobile.ViewModels;
using System.ComponentModel;
using Xamarin.Forms;

namespace FoodStuffMobile.Views
{
    public partial class ItemDetailPage : ContentPage
    {
        public ItemDetailPage()
        {
            InitializeComponent();
            BindingContext = new ItemDetailViewModel();
        }
    }
}