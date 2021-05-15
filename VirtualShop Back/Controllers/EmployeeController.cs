using Microsoft.AspNetCore.Mvc;
using System.Linq;
using VirtualShop_Back.Models;
using System.Threading.Tasks;

namespace VirtualShop_Back.Models
{
    [Route("api/[controller]")]    
    public class EmployeeController : Controller
    {
        private Connection connection;

        public EmployeeController()
        {
            connection = Conecct.Create();
        }

        [HttpGet]
        public ActionResult Get(){
            return Ok(connection.Employee.ToArray());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id){
            //var employeee = connection.employee.SingleOrDefault(a => a.id == id);
            var employee = await connection.Employee.FindAsync(id);
            if(employee != null){
                return Ok(employee);
            }
            else{
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]Employee employee){
            if(ModelState.IsValid){
                connection.Employee.Add(employee);
                await connection.SaveChangesAsync();
                return Ok(employee);
            }
            else {
                return NotFound();
            }
        }

        [HttpPut]
        public async Task<ActionResult> Put([FromBody]Employee employeeUpdate){
            var employee = connection.Employee.SingleOrDefault(a => a.id == employeeUpdate.id);
            if(employee != null && ModelState.IsValid){
                connection.Entry(employee).CurrentValues.SetValues(employeeUpdate);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id){
            var employee = await connection.Employee.FindAsync(id);
            if(employee != null){
                connection.Employee.Remove(employee);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else{
                return NotFound();
            }
        }
    }
}