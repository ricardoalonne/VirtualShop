using Microsoft.AspNetCore.Mvc;
using System.Linq;
using VirtualShop_Back.Models;
using System.Threading.Tasks;

namespace VirtualShop_Back.Models
{
    [Route("api/[controller]")]    
    public class ClientController : Controller
    {
        private Connection connection;

        public ClientController()
        {
            connection = Conecct.Create();
        }

        [HttpGet]
        public ActionResult Get(){
            return Ok(connection.Client.ToArray());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id){
            //var cliente = connection.Client.SingleOrDefault(a => a.id == id);
            var client = await connection.Client.FindAsync(id);
            if(client != null){
                return Ok(client);
            }
            else{
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]Client client){
            if(ModelState.IsValid){
                connection.Client.Add(client);
                await connection.SaveChangesAsync();
                return Ok(client);
            }
            else {
                return NotFound();
            }
        }

        [HttpPut]
        public async Task<ActionResult> Put([FromBody]Client clientUpdate){
            var client = connection.Client.SingleOrDefault(a => a.id == clientUpdate.id);
            if(client != null && ModelState.IsValid){
                connection.Entry(client).CurrentValues.SetValues(clientUpdate);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id){
            var client = await connection.Client.FindAsync(id);
            if(client != null){
                connection.Client.Remove(client);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else{
                return NotFound();
            }
        }
    }
}