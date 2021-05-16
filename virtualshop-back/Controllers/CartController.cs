using Microsoft.AspNetCore.Mvc;
using System.Linq;
using VirtualShop_Back.Models;
using System.Threading.Tasks;

namespace VirtualShop_Back.Models
{
    [Route("api/[controller]")]    
    public class CartController : Controller
    {
        private Connection connection;

        public CartController()
        {
            connection = Conecct.Create();
        }

        [HttpGet]
        public ActionResult Get(){
            return Ok(connection.Cart.ToArray());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id){
            var cart = await connection.Cart.FindAsync(id);
            if(cart != null){
                return Ok(cart);
            }
            else{
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]Cart cart){
            if(ModelState.IsValid){
                connection.Cart.Add(cart);
                await connection.SaveChangesAsync();
                return Ok(cart);
            }
            else {
                return NotFound();
            }
        }

        [HttpPut]
        public async Task<ActionResult> Put([FromBody]Cart cartUpdate){
            var cart = connection.Cart.SingleOrDefault(a => a.id == cartUpdate.id);
            if(cart != null && ModelState.IsValid){
                connection.Entry(cart).CurrentValues.SetValues(cartUpdate);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id){
            var cart = await connection.Cart.FindAsync(id);
            if(cart != null){
                connection.Cart.Remove(cart);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else{
                return NotFound();
            }
        }
    }
}