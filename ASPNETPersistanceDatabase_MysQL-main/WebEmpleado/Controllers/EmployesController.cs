using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.SqlServer.Management.Smo;
using MySql.Data.MySqlClient;
using WebEmpleado.Data;
using WebEmpleado.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace WebEmpleado.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class EmployesController : ControllerBase
    {

        private readonly EmployeDbConext _context;
        
       
        
        public EmployesController (EmployeDbConext context)
        {
            _context = context;
        }
        //instruccion para que el controller acepte más de un Get
        [AcceptVerbs("GET")]
        //Primer Get que se ejecuta cuando complilamos la aplicación    
        
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employe>>> GetEmployes()
        {
            return await _context.Employe.ToListAsync();
        }
        [HttpGet("{id}")]

        public async Task<ActionResult<Employe>> GetEmployesId(int Id)
        {
            var employeId = await _context.Employe.FindAsync(Id);
            if (employeId == null)
            {
                return NotFound("Registro no encontrado");

            }
            return employeId;

        }

        //Método para añadir un nuevo registro 
        [HttpPost]
        public async Task<ActionResult<Employe>> PostEmployeId(Employe employe)
        {
            _context.Employe.Add(employe);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEmployesId), new { Id = employe.id }, employe);

        }
        //Método para actualizar parcialmente los registros 
        [HttpPut("{id}")]

        public async Task<IActionResult> PutEmployeId(int Id, Employe employe)
        {
            if (Id != employe.id)
            {
                return BadRequest();
            }
            _context.Entry(employe).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();


        }
        //Método para borrar registros filtrando por Id
        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteId(int Id)
        {
            var employeId = await _context.Employe.FindAsync(Id);
            if (employeId == null)
            {
                return NotFound("Registro no encontrado");

            }
            _context.Employe.Remove(employeId);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        //Método Patch que comprubea si existe el id en la base de datos , devolverá un código en función del resultado de la ejecución del código  
        [HttpPatch("FnameS/{id}")]
        public async Task<IActionResult> ChangeFnameS(int id,[FromQuery] string FnameS)
        {
            if (string.IsNullOrWhiteSpace(FnameS))
            {
                return BadRequest();
            }
            var Employe = await _context.Employe.FindAsync(id);
            if (Employe == null)
            {
                return NotFound();

            }
            if (await _context.Employe.Where(x => x.FnameS == FnameS && x.id != id).AnyAsync())
            {
                return BadRequest("El id ya Existe");

            }
            Employe.FnameS = FnameS;
            await _context.SaveChangesAsync();
            return StatusCode(200, Employe);
        }
        //Método que ejecutará el cambio parcial
        [HttpPatch("{id}")]
        public async Task<IActionResult> PatchId(int Id, JsonPatchDocument<Employe> _ChangeEmploye)
        {

            var ChangeEmploye = await _context.Employe.FindAsync(Id);
            if (ChangeEmploye == null)
            {
                return NotFound("Registro no encontrado");
            }
            _ChangeEmploye.ApplyTo(ChangeEmploye, (Microsoft.AspNetCore.JsonPatch.Adapters.IObjectAdapter)ModelState);
            await _context.SaveChangesAsync();
            return Ok(ChangeEmploye);

        }
    }
    }

    

